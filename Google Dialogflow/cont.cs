using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication_dialogflow.Models;


namespace WebApplication_dialogflow.Controllers
{
    public class FulfillmentController : ApiController
    {
        public IHttpActionResult Post([FromBody] ApiAIRequest request)
        {
            int num1 = Convert.ToInt32(request.result.parameters["num1"]);
            int num2 = Convert.ToInt32(request.result.parameters["num2"]);
            int sum = num1 + num2;
            string speech = $"Sum of {num1} and {num2} is {sum}";
            ApiAIResponse response = new ApiAIResponse
            {
                speech = speech,
                displayTxt = speech
            };
            return Ok(response);
        }
    }


    public async Task Sendmessages()
    {
        string endpoint = "https://api.openai.com/v1/chat/completions";
        var messages = new[]{
            new {
                role ="user",content = request
            }
        };

        var data = new{
            model = "gpt-3.5-turbo",
            messages = messages,
            temperature = 0.7
        };

        string jsonString = JsonConvert.SerializeObject(data);

        var content = new StringContent(jsonString, Encoding.UTF8,"application/json");

        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Authorization", "Bearer ");

        var response2 = await client.PostAsync(endpoint, content);

        string ResponseContent = await response2.Content.ReadAsStringAsync();
        
        var jsonResponse = JObject.Parse(responseContent);
        
        var response = jsonResponse["choices"][0]["messages"]["content"].Value<string>();
    }
}