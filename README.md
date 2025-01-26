# LLM-POWERED-CHATBOT
Welcome to the Llama-3 Chatbot project! This chatbot allows you to interact with the Llama-3 model via a simple and well structured user  interface. Type your messages, and receive responses from Llama-3.
Table of Contents
Installation
Usage
Examples
Resources
License
Installation
Prerequisites
Python 3.8 or higher
ollama library
Downlaod and install ollama from the official website as per your operating system: https://ollama.com/download/windows
Llama-3 setup
Open the terminal and change the directory where Ollama is located (C:OS drive)
Download the llama3 model on the local system
ollama pull llama3
Lists all the models downloaded in the local system (4.7 GB)
ollama list
Run the model
ollama run llama3:latest
Serving llama locally
ollama serve
Steps
Clone the repository:

git clone https://github.com/anushkaspatil/llama3-chatbot.git
cd llama3-chatbot
Create a virtual environment (optional but recommended):

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install the required Python packages:

pip install ollama
Usage
You can choose between two methods to run the chatbot: synchronous and asynchronous.

Synchronous Method
The synchronous method is straightforward is slower due to the blocking calls. To start the chat with the synchronous method, install and import the dependencies and run the file chat.py

Features
Real-time streaming of responses from the Llama model
Infinite loop for continuous interaction
Run the chatbot:
python chat.py
Interact with the chatbot:
Enter your messages when prompted.
The chatbot will provide responses from the Llama model.
