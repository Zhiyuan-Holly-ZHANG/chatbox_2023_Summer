import os 
import sys
import constants

from langchain.document_loaders import TextLoader, DirectoryLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI



def f1(inputmsg):
    os.environ["OPEN_API_KEY"] = constants.APIKEY

    query = inputmsg #sys.argv[1]

    
    loader = TextLoader('data.txt', autodetect_encoding=True)
    # print("hello")
    # loader = DirectoryLoader(".",glob="*.txt")

    index = VectorstoreIndexCreator().from_loaders([loader])
    # print(index.query(query))

    # print(index.query(query,llm=ChatOpenAI()))
    return index.query(query,llm=ChatOpenAI())


if __name__ == "__main__":
    f1("hi")