import json
import re

with open("all_scraped_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("=== ABOUT US PAGE ===")
if "https://tattooartistindelhi.com/about-us/" in data:
    txt = data["https://tattooartistindelhi.com/about-us/"]["full_text"]
    print(txt[:1500])
    print("\n--- IMAGES ---")
    print(data["https://tattooartistindelhi.com/about-us/"]["images"])

print("\n=== CONTACT US PAGE ===")
if "https://tattooartistindelhi.com/contact-us/" in data:
    txt = data["https://tattooartistindelhi.com/contact-us/"]["full_text"]
    print(txt[:1500])
    print("\n--- IMAGES ---")
    print(data["https://tattooartistindelhi.com/contact-us/"]["images"])

print("\n=== OUR AWARDS ===")
if "https://tattooartistindelhi.com/our-awards/" in data:
    txt = data["https://tattooartistindelhi.com/our-awards/"]["full_text"]
    print(txt[:1000])

print("\n=== OUR STUDIO ===")
if "https://tattooartistindelhi.com/our-studio/" in data:
    txt = data["https://tattooartistindelhi.com/our-studio/"]["full_text"]
    print(txt[:1000])

print("\n=== TRAINING ===")
if "https://tattooartistindelhi.com/training/" in data:
    txt = data["https://tattooartistindelhi.com/training/"]["full_text"]
    print(txt[:1000])
