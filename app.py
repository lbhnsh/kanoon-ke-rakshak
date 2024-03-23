from flask import Flask, request, jsonify
from flask_cors import CORS
from pdf2image import convert_from_bytes
from PIL import Image
import pytesseract
import io
from langchain_community.embeddings import HuggingFaceEmbeddings
# from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import google.generativeai as genai
import os

genai.configure(api_key="AIzaSyDhpPgFxfmFUJcH-DLn4It5kmbtlyOFI0A")

model = genai.GenerativeModel('gemini-pro')

text=""
summary=""
query_ans=""

load_dotenv()
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks


def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    # print("SSSS")
    vector_store.save_local("/home/labhansh/Hackathons/faiss_index")

def get_conversational_chain():

    prompt_template = """
    Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
    provided context just say, "answer is not available in the context", don't provide the wrong answer\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """
    
    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain


def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001")

    # new_db = FAISS.load_local("faiss_index", embeddings)
    new_db = FAISS.load_local("/home/labhansh/Hackathons/faiss_index", embeddings,allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)

    # chain = get_conversational_chain()
    response = model.generate_content(f"Answer {user_question} based  on {docs} ")
    # print(response)
    # print(response.text)

    # response = chain(
        # {"input_documents":docs, "question": user_question}
        # , return_only_outputs=False)
    # print("A")
    # print(response)
    return response.text



@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    
    if file.filename.endswith('.pdf'):
        # Convert PDF to image
        images = convert_from_bytes(file.read())
        image = images[0]  # Assuming single page PDF
    else:
        # Read image file
        image_bytes = file.read()
        image = Image.open(io.BytesIO(image_bytes))

    # Process image
    text = pytesseract.image_to_string(image)
    
    user_question = input("Enter your questions: ")

    summaryquer="Summarize the text in short"
    summary=user_input(summaryquer)
    print("summary: ",summary)

    if user_question:
        query_ans=user_input(user_question)
        print("query_ans: ",query_ans)
        # return jsonify({'text': text})


    else:
        text_chunks = get_text_chunks(text)
        get_vector_store(text_chunks)

    return jsonify({'text': text, 'summary': summary, 'query_ans': query_ans})


if __name__ == '__main__':
    app.run(debug=True, port=5001)