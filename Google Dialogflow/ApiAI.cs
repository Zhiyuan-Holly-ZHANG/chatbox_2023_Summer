using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;



namespace WebApplication_dialogflow.Models
{
    public class ApiAIRequest
    {
        public string id { get; set; }
        public string sessionId { get; set; }
        public string timestamp { get; set; }
        public string lang { get; set; }
        public string result { get; set; }
    }

    public class ApiAIResult
    {
        public string source { get; set; }
        public string resolvedQuery { get; set; }
        public Dictionary<string, string> parameters { get; set; }
        public Dictionary<string, string> contexts { get; set; }
        public Dictionary<string, string> metadata { get; set; }
    }

    public class ApiAIResponse
    {
        public string speech { get; set; }
        public string displayTxt { get; set; }
    }
}