import os
from docx import Document
from PIL import Image
from io import BytesIO

# Paths (adjust these to your actual paths)
input_docx_path = '/Users/carolinelane/Desktop/digipharm_all/digipharm-australia/mockup-australia.docx'
output_folder = '/Users/carolinelane/Desktop/digipharm_all/digipharm-australia/digipharm-australia/src/assets'

# Ensure the output folder exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Open the .docx file
doc = Document(input_docx_path)

# Function to save images
def save_image(image, path):
    with open(path, 'wb') as f:
        f.write(image)

# Extract and save images
for i, rel in enumerate(doc.part.rels.values()):
    if "image" in rel.target_ref:
        image = rel.target_part.blob
        image_stream = BytesIO(image)
        image = Image.open(image_stream)
        image_format = image.format.lower()
        if image_format == 'jpeg':
            image_format = 'jpg'
        image_path = os.path.join(output_folder, f'image_{i+1}.{image_format}')
        image.save(image_path)

print("Images extracted and saved successfully.")
