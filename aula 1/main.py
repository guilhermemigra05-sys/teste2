import requests

data = {
    "rota" : "v1/admin",
    "Tipo" : "POST"
}

r = requests.post("http://localhost:3000/createRote", json=data)
print(r.text)

r = requests.get("http://localhost:3000/getRotes")
print(r.text)