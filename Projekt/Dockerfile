# Używamy lekkiego obrazu Node.js
FROM node:18-slim

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki z zależnościami
COPY package*.json ./

# Instalujemy paczki
RUN npm install

# Kopiujemy resztę kodu
COPY . .

# Otwieramy port 3000
EXPOSE 3000

# Komenda startowa
CMD ["node", "app.js"]