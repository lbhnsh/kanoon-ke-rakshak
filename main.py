from fastapi import FastAPI,WebSocket, Request, UploadFile, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
import aiofiles
from PIL import Image
from io import BytesIO
from nanonets import NANONETSOCR
ocr_model = NANONETSOCR()
ocr_model.set_token("d82919c6-e80b-11ee-8528-9a63acd1e5a6")

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.websocket('/uploadimg')  
# async def upload(ws: WebSocket):
#     await ws.accept()

#     print("connection established")


@app.post('/upload')
async def upload(file: UploadFile):
    try:
        contents = await file.read()
        async with aiofiles.open(file.filename, 'wb') as f:
            await f.write(contents)
        # image = Image.open(BytesIO(contents))
        string1 = ocr_model.convert_to_string(file.filename)

        print(string1)
        # ocr_text = pytesseract.image_to_string(image)

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail='There was an error uploading the file',
        )
    finally:
        await file.close()
    # print(type(f)) 
    return {'ocr_text': string1}    
    # return {'message': f'Successfuly uploaded {type(image)}'}


# # Access the form at 'http://127.0.0.1:8000/' from your browser
# @app.get('/')
# async def main():
#     content = '''
#     <body>
#     <form action='/upload' enctype='multipart/form-data' method='post'>
#     <input name='file' type='file'>
#     <input type='submit'>
#     </form>
#     </body>
#     '''
#     return HTMLResponse(content=content)
#     # obj = {'curr_volume': str(curr_volume), 'song_command': str(song_command)}
#     # await ws.send_json(obj)

# from fastapi import FastAPI, UploadFile, HTTPException, status
# from fastapi.middleware.cors import CORSMiddleware
# from nanonets import NANONETSOCR
# import os 
# ocr_model = NANONETSOCR()
# ocr_model.set_token("d82919c6-e80b-11ee-8528-9a63acd1e5a6")

# app = FastAPI()
# origins = ["*"]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# ALLOWED_IMAGE_FORMATS = ['.jpg', '.jpeg', '.png']

# @app.post('/upload')
# async def upload(file: UploadFile):
#     try:
#         filename, file_extension = os.path.splitext(file.filename)
#         if file_extension.lower() not in ALLOWED_IMAGE_FORMATS:
#             raise HTTPException(
#                 status_code=status.HTTP_400_BAD_REQUEST,
#                 detail=f"Only {', '.join(ALLOWED_IMAGE_FORMATS)} file formats are allowed."
#             )

#         contents = await file.read()
#         async with open(file.filename, 'wb') as f:
#             f.write(contents)
        
#         ocr_text = ocr_model.convert_to_string(file.filename)
#         return {'ocr_text': ocr_text}

#     except Exception:
#         raise HTTPException(
#             status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
#             detail='There was an error processing the file',
#         )