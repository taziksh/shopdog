import requests
import json

url = "http://localhost:8000/query/"
data = {"information": "men's wool v-neck cardigan sweater"}

response = requests.post(url, data=json.dumps(data), headers={'Content-Type': 'application/json'})

print(response.json())