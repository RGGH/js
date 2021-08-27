# pip install Jinja2
from jinja2 import Environment, FileSystemLoader
import os
 
root = os.path.dirname(os.path.abspath(__file__))
templates_dir = os.path.join(root, 'templates')
env = Environment( loader = FileSystemLoader(templates_dir) )
template = env.get_template('template.html')
 
 
filename = os.path.join(root, 'html', 'index.html')
with open(filename, 'w') as fh:
    fh.write(template.render(
        cTemps = [1,3,4,5,6,10],
        labeltext = "'Demo Chart #1'",
        h1_title_text = "jinja chart js demo!"
    ))
