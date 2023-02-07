#Made by H0ruh3
import os
from PIL import Image
from random import choice

card = "Cards/" + choice(os.listdir("Cards"))
img = Image.open(card)
img.show()
