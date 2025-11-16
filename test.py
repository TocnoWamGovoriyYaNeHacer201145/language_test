import sys

def open_content(file):
    with open(file, 'r') as file:
        content = file.read()
        exec(content)
