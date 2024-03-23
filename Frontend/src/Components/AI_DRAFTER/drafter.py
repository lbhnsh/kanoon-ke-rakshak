import requests
from bs4 import BeautifulSoup

sectors = {
    'Banking / Finance': 'https://lawrato.com/legal-documents/banking-finance-legal-forms',
    'Bonds': 'https://lawrato.com/legal-documents/bonds-legal-forms',
    'Civil': 'https://lawrato.com/legal-documents/civil-legal-forms',
    'Contracts': 'https://lawrato.com/legal-documents/contracts-legal-forms',
    'Corporate / Business': 'https://lawrato.com/legal-documents/corporate-business-legal-forms',
    'Criminal': 'https://lawrato.com/legal-documents/criminal-legal-forms',
    'Divorce / Family Law': 'https://lawrato.com/legal-documents/divorce-family-law-legal-forms',
    'Labour & Consumer Court': 'https://lawrato.com/legal-documents/labour-consumer-court-legal-forms',
    'Power of Attorney': 'https://lawrato.com/legal-documents/power-of-attorney-legal-forms',
    'Property': 'https://lawrato.com/legal-documents/property-legal-forms',
    'Trademark & Copyright (IPR)': 'https://lawrato.com/legal-documents/trademark-copyright-ipr-legal-forms',
    'Trusts': 'https://lawrato.com/legal-documents/trusts-legal-forms',
    'Will': 'https://lawrato.com/legal-documents/will-legal-forms'
}

def extract_titles_and_hrefs(html):
    soup = BeautifulSoup(html, 'html.parser')
    titles_and_hrefs = {}
    question_bodies = soup.find_all('div', class_='question-body')
    for body in question_bodies:
        a_tags = body.find_all('a')
        if len(a_tags) >= 2:
            title = a_tags[1].text.strip()
            href = a_tags[1]['href']
            titles_and_hrefs[title] = href
    return titles_and_hrefs

def fetch_html_content(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.content
    else:
        print(f"Failed to fetch HTML content from {url}")
        return None

sector_document_info = {}

for sector, url in sectors.items():
    sector_html = fetch_html_content(url)
    if sector_html:
        titles_and_hrefs = extract_titles_and_hrefs(sector_html)
        sector_document_info[sector] = titles_and_hrefs

# Print the extracted document info
for sector, document_info in sector_document_info.items():
    print(f"--- {sector} ---")
    for title, href in document_info.items():
        print(f"{title}: {href}")

from bs4 import BeautifulSoup

def extract_href_from_down_form(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all <a> tags with id down_form
    down_form_links = soup.find_all('a', id='down_form')

    # Create a dictionary to store hrefs for each title
    href_dict = {}

    for link in down_form_links:
        # Get the title associated with the href
        title = link.find_previous('h2').get_text(strip=True)
        href = link['href']

        # Add href to the dictionary
        if title in href_dict:
            href_dict[title].append(href)
        else:
            href_dict[title] = [href]

    return href_dict

# Assuming sector_document_info is defined and contains the necessary information
# Modify this part according to how you're obtaining sector_document_info
sector_href_dict = {}
for sector, document_info in sector_document_info.items():
    print(f"--- {sector} ---")
    sector_href_dict[sector] = {}
    for title, href in document_info.items():
        sector_html = fetch_html_content(href)
        if sector_html:
            down_form_hrefs = extract_href_from_down_form(sector_html)
            sector_href_dict[sector].update(down_form_hrefs)

print(sector_href_dict.items())