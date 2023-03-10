
// Get data from array of objects
let data = [
    {
      company: "Company 1",
      type: "RATE",
      startDate: "2021-01-01",
      endDate: "2021-01-31",
      impressionsimpressions: 1000,
      audience: 100,
      clicks: 50,
      neededImpressions: 2000
    },
    {
      company: "Company 2",
      type: "RMA",
      startDate: "2021-02-01",
      endDate: "2021-02-28",
      impressionsimpressions: 2000,
      audience: 200,
      clicks: 100,
      neededImpressions: 3000
    },
    {
      company: "Company 3",
      type: "RATE",
      startDate: "2021-03-01",
      endDate: "2021-03-31",
      impressionsimpressions: 3000,
      audience: 300,
      clicks: 150,
      neededImpressions: 4000
    },
        {
          type: "RATE",
          company: "RATE",
          campaignName: "RateMyPlacement - Breaking into Law 2022/23 - 50k",
          Deadline: "10/11/2022",
          neededImpressions: "50000",
          impressions: "54377",
          clicks: "258",
          startDate: "27/09/2022",
          endDate: "10/10/22",
          audience: "Virtual Event",
        },
        {
          type: "RMA",
          company: "MSD",
          campaignName: "MSD 2022/23 - Location 1k",
          Deadline: "16/09/2022",
          neededImpressions: "1,000",
          impressions: "1446",
          clicks: "13",
          startDate: "09/02/2022",
          endDate: "07/09/2022",
          audience: "Location",
        },
        {
          type: "RMA",
          company: "LTSB",
          campaignName: "LTSB 2022/23 - 50k",
          Deadline: "30/09/2022",
          neededImpressions: "50,000",
          impressions: "51132",
          clicks: "225",
          startDate: "24/08/2022",
          endDate: "12/09/2022",
          audience: "Location",
        },
        {
          type: "RATE",
          company: "GSK",
          campaignName: "GSK 2022/23 - Female 50k",
          Deadline: "14/10/2022",
          neededImpressions: "50000",
          impressions: "56,995",
          clicks: "183",
          startDate: "29/09/2022",
          endDate: "13/10/2022",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "Bentley",
          campaignName: "",
          Deadline: "16/10/2022",
          neededImpressions: "50000",
          impressions: "43002",
          clicks: "234",
          startDate: "10/10/2022",
          endDate: "17/10/2022",
          audience: "Females",        },
        {
          type: "RATE",
          company: "Discover",
          campaignName: "",
          Deadline: "20/11/2022",
          neededImpressions: "10000",
          impressions: "12489",
          clicks: "31",
          startDate: "14/10/2022",
          endDate: "17/10/2022",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "Rate",
          campaignName: "RateMyPlacement 2022/23 Inspirational Female 50k",
          Deadline: "15/11/2022",
          neededImpressions: "50000",
          impressions: "50327",
          clicks: "173",
          startDate: "27/09/2022",
          endDate: "10/18/22",
          audience: "Virtual Event",
        },
        {
          type: "RATE",
          company: "Rate",
          campaignName: "RateMyPlacement 2022/23 Black Heritage - 50k",
          Deadline: "10/18/2022",
          neededImpressions: "50000",
          impressions: "56540",
          clicks: "254",
          startDate: "27/09/2022",
          endDate: "20/10/2022",
          audience: "Virtual Event",
        },
        {
          type: "RATE",
          company: "Uni of Law",
          campaignName: "Uni of Law 2022/23 - Competition - 200k",
          Deadline: "31/10/2022",
          neededImpressions: "200000",
          impressions: "200806",
          clicks: "782",
          startDate: "01/07/2022",
          endDate: "10/24/22",
          audience: "Competition",
        },
        {
          type: "RATE",
          company: "STFC",
          campaignName: "STFC 2022/23",
          Deadline: "11/13/2022",
          neededImpressions: "1000",
          impressions: "4181",
          clicks: "22",
          startDate: "26/10/2022",
          endDate: "10/28/22",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "Volvo",
          campaignName: "Volvo 2022/23 - 50k",
          Deadline: "10/31/2011",
          neededImpressions: "50000",
          impressions: "91019",
          clicks: "519",
          startDate: "20/10/2022",
          endDate: "11/3/22",
          audience: "",
        },
        {
          type: "RATE",
          company: "Ge Aviation",
          campaignName: "GE Aviation 2022/23 - Females 30k",
          Deadline: "1/1/2023",
          neededImpressions: "30000",
          impressions: "30311",
          clicks: "235",
          startDate: "04/10/2022",
          endDate: "11/2/22",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "BAE Systems",
          campaignName: "BAE Systems 2022/23 - STEM 50k",
          Deadline: "1/1/2023",
          neededImpressions: "50000",
          impressions: "88532",
          clicks: "638",
          startDate: "23/09/2022",
          endDate: "11/3/22",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "MSD",
          campaignName: "MSD 2022/23 - 75k",
          Deadline: "6/11/2022",
          neededImpressions: "75000",
          impressions: "89359",
          clicks: "697",
          startDate: "19/10/2022",
          endDate: "11/7/22",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Vertex",
          campaignName: "Vertex 2022/23 - STEM 75k",
          Deadline: "11/11/2022",
          neededImpressions: "75000",
          impressions: "78650",
          clicks: "404",
          startDate: "20/10/2022",
          endDate: "11/7/22",
          audience: "STEM",
        },
        {
          type: "RMA",
          company: "Azets",
          campaignName: "Azets 2022/23 - 1k",
          Deadline: "Rolling",
          neededImpressions: "1000",
          impressions: "5840",
          clicks: "56",
          startDate: "03/11/2022",
          endDate: "11/7/22",
          audience: "General",
        },
        {
          type: "RATE",
          company: "NBC",
          campaignName: "NBC 2022/23 50k",
          Deadline: "11/10/2022",
          neededImpressions: "50000",
          impressions: "52583",
          clicks: "583",
          startDate: "13/10/2022",
          endDate: "11/10/22",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Savills",
          campaignName: "Savills 2022/23 - 50k",
          Deadline: "11/11/2022",
          neededImpressions: "50000",
          impressions: "53084",
          clicks: "1709",
          startDate: "06/10/2022",
          endDate: "11/11/2022",
          audience: "",
        },
        {
          type: "RMA",
          company: "Mi5",
          campaignName: "Mi5 2022/23 - 1k #1 of 6 - London",
          Deadline: "14/11/2022",
          neededImpressions: "1000",
          impressions: "2388",
          clicks: "17",
          startDate: "11/11/2022",
          endDate: "14/11/2022",
          audience: "London",
        },
        {
          type: "RMA",
          company: "Mi5",
          campaignName: "Mi5 2022/23 - 1k #2 of 6  - London",
          Deadline: "14/11/2022",
          neededImpressions: "1000",
          impressions: "1877",
          clicks: "17",
          startDate: "11/11/2022",
          endDate: "14/11/2022",
          audience: "London",
        },
        {
          type: "RMA",
          company: "Mi5",
          campaignName: "Mi5 2022/23 - 1k #3 of 6 - London",
          Deadline: "14/11/2022",
          neededImpressions: "1000",
          impressions: "1511",
          clicks: "14",
          startDate: "11/11/2022",
          endDate: "14/11/2022",
          audience: "London",
        },
        {
          type: "RMA",
          company: "Mi5",
          campaignName: "Mi5 2022/23 - 1k #4 of 6 - Manchester",
          Deadline: "14/11/2022",
          neededImpressions: "1000",
          impressions: "1176",
          clicks: "11",
          startDate: "11/11/2022",
          endDate: "14/11/2022",
          audience: "Manchester",
        },
        {
          type: "RMA",
          company: "Mi5",
          campaignName: "Mi5 2022/23 - 1k #5 of 6 - Manchester",
          Deadline: "14/11/2022",
          neededImpressions: "1000",
          impressions: "1808",
          clicks: "4",
          startDate: "11/11/2022",
          endDate: "14/11/2022",
          audience: "Manchester",
        },
        {
          type: "RMA",
          company: "Mi5",
          campaignName: "Mi5 2022/23 - 1k #6 of 6 - Manchester",
          Deadline: "14/11/2022",
          neededImpressions: "1000",
          impressions: "2321",
          clicks: "22",
          startDate: "11/11/2022",
          endDate: "14/11/2022",
          audience: "Manchester",
        },
        {
          type: "RATE",
          company: "LSEG",
          campaignName: "LSEG 2022/23 - Females 20k",
          Deadline: "21/11/22",
          neededImpressions: "20000",
          impressions: "38342",
          clicks: "758",
          startDate: "03/11/2022",
          endDate: "21/11/2022",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "Adobe",
          campaignName: "Adobe 2022/23 - Females 50k",
          Deadline: "20/11/2022",
          neededImpressions: "50000",
          impressions: "71519",
          clicks: "475",
          startDate: "03/11/2022",
          endDate: "20/11/2022",
          audience: "Females",
        },
        {
          type: "RATE",
          company: "Adobe",
          campaignName: "Adobe 2022/23 - STEM 50k",
          Deadline: "20/11/2022",
          neededImpressions: "50000",
          impressions: "38202",
          clicks: "461",
          startDate: "03/11/2022",
          endDate: "20/11/2022",
          audience: "STEM",        },
        {
          type: "RMA",
          company: "RMA",
          campaignName: "RMA",
          Deadline: "21/11/2022",
          neededImpressions: "50000",
          impressions: "51293",
          clicks: "506",
          startDate: "14/10/2022",
          endDate: "23/11/2022",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Citi",
          campaignName: "Citi 2022/23 - Females 50k",
          Deadline: "01/12/2022",
          neededImpressions: "50000",
          impressions: "49931",
          clicks: "367",
          startDate: "13/10/2022",
          endDate: "01/12/2022",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "UBS",
          campaignName: "UBS 2022/23 - Females 50k",
          Deadline: "30/11/2022",
          neededImpressions: "50000",
          impressions: "50371",
          clicks: "446",
          startDate: "10/10/2022",
          endDate: "01/12/2022",
          audience: "Females",
        },
        {
          type: "RATE",
          company: "CGI",
          campaignName: "CGI 2022/23 - STEM 50k",
          Deadline: "31/12/2022",
          neededImpressions: "50000",
          impressions: "53542",
          clicks: "547",
          startDate: "13/10/2022",
          endDate: "02/12/2022",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "BAE Systems #2 of 4",
          campaignName: "BAE Systems 2022/23 STEM #2 - 50k",
          Deadline: "Rolling",
          neededImpressions: "50000",
          impressions: "52147",
          clicks: "834",
          startDate: "03/11/2022",
          endDate: "06/12/2022",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "Nomura",
          campaignName: "Nomura 2022/23 - Females 50k",
          Deadline: "02/12/2022",
          neededImpressions: "50000",
          impressions: "51617",
          clicks: "645",
          startDate: "17/10/2022",
          endDate: "02/12/2022",
          audience: "Females",
        },
        {
          type: "RATE",
          company: "Liberty Global",
          campaignName: "Liberty Global 2022/23 - 50k",
          Deadline: "05/12/2022",
          neededImpressions: "50000",
          impressions: "50041",
          clicks: "402",
          startDate: "26/10/2022",
          endDate: "05/12/2022",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Latham",
          campaignName: "Latham & Watkins 2022/23 50k",
          Deadline: "15/12/2022",
          neededImpressions: "50000",
          impressions: "74649",
          clicks: "803",
          startDate: "03/11/2022",
          endDate: "06/12/2022",
          audience: "General",
        },
        {
          type: "RMA",
          company: "BAE Systems",
          campaignName: "BAE Systems 2022/23 8k - Locations",
          Deadline: "Ongoing",
          neededImpressions: "1000",
          impressions: "1351",
          clicks: "30",
          startDate: "17/11/2022",
          endDate: "06/12/2022",
          audience: "Location/Females",
        },
        {
          type: "RATE",
          company: "Redgate",
          campaignName: "Redgate 2022/23 - Females 50k",
          Deadline: "25/12/2022",
          neededImpressions: "50000",
          impressions: "61951",
          clicks: "842",
          startDate: "26/10/2022",
          endDate: "",
          audience: "Females",
        },
        {
          type: "RATE",
          company: "Unilever",
          campaignName: "Unilever 2022/23 - Comp - 100k",
          Deadline: "09/12/2022",
          neededImpressions: "100000",
          impressions: "106118",
          clicks: "1092",
          startDate: "26/10/2022",
          endDate: "08/12/2022",
          audience: "Comp",
        },
        {
          type: "RATE",
          company: "EDF Trading",
          campaignName: "EDF Trading 2022/23 - STEM 50k",
          Deadline: "31/12",
          neededImpressions: "50000",
          impressions: "57743",
          clicks: "552",
          startDate: "09/11/2022",
          endDate: "13/12/2022",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "Goldman Sachs",
          campaignName: "Goldman Sachs 2022/23 - STEM 75k",
          Deadline: "31/01/2023",
          neededImpressions: "75000",
          impressions: "75113",
          clicks: "1106",
          startDate: "02/11/2022",
          endDate: "",
          audience: "STEM",
        },
        {
          type: "RMA",
          company: "Ge Aviation",
          campaignName: "GE Aviation 2022/23 - Location",
          Deadline: "31/12/2022",
          neededImpressions: "30000",
          impressions: "30706",
          clicks: "320",
          startDate: "13/10/2022",
          endDate: "20/12/2022",
          audience: "Location",
        },
        {
          type: "RATE",
          company: "Linklaters BA Campaign ",
          campaignName: "Linklaters 2022/23 - 200k",
          Deadline: "44908",
          neededImpressions: "200000",
          impressions: "142095",
          clicks: "1188",
          startDate: "08/11/2022",
          endDate: "",
          audience: "TBC",        },
        {
          type: "RATE",
          company: "bp",
          campaignName: "bp 2022/23 20k",
          Deadline: "31/01/2023",
          neededImpressions: "20000",
          impressions: "23136",
          clicks: "483",
          startDate: "08/11/2022",
          endDate: "23/12/2022",
          audience: "General",
        },
        {
          type: "RATE",
          company: "EDF Trading",
          campaignName: "EDF 2022/23 - Female 50k",
          Deadline: "31/12/2022",
          neededImpressions: "50000",
          impressions: "49933",
          clicks: "530",
          startDate: "09/11/2022",
          endDate: "23/12/2022",
          audience: "Females",
        },
        {
          type: "RMA",
          company: "bp",
          campaignName: "",
          Deadline: "31/12",
          neededImpressions: "30000",
          impressions: "31718",
          clicks: "440",
          startDate: "08/11/2022",
          endDate: "28/12/2022",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Mercedes AMG HPP",
          campaignName: "Mercedes AMG 2022/23 - Females - 50k",
          Deadline: "31/12/2022",
          neededImpressions: "50000",
          impressions: "49764",
          clicks: "793",
          startDate: "06/10/2022",
          endDate: "03/01/2023",
          audience: "Females",
        },
        {
          type: "RATE",
          company: "L'Oreal",
          campaignName: "L'oreal 2022/23 - Males 25k",
          Deadline: "27/1",
          neededImpressions: "25000",
          impressions: "30043",
          clicks: "#N/A",
          startDate: "14/11/2022",
          endDate: "03/01/2023",
          audience: "Male",
        },
        {
          type: "RATE",
          company: "Toyota GB",
          campaignName: "Toyota GB 2022/23 - 50k",
          Deadline: "2/1/2023",
          neededImpressions: "75000",
          impressions: "78296",
          clicks: "691",
          startDate: "9/11/2022",
          endDate: "04/01/2023",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "MUFG",
          campaignName: "MUFG 2022/23 - Females 50k",
          Deadline: "08/01/2023",
          neededImpressions: "50000",
          impressions: "51399",
          clicks: "948",
          startDate: "30/09/2022",
          endDate: "04/01/2023",
          audience: "Female",
        },
        {
          type: "RATE",
          company: "VWFS 2022/23 - Females - 50k",
          campaignName: "VWFS 2022/23 - Females - 50k",
          Deadline: "31/12/2022",
          neededImpressions: "50000",
          impressions: "60522",
          clicks: "609",
          startDate: "14/12/2022",
          endDate: "04/01/2023",
          audience: "Females",
        },
        {
          type: "RMA",
          company: "Mott Mcdonald",
          campaignName: "Mott MacDonald 2022/23 STEM - 50k",
          Deadline: "4/1",
          neededImpressions: "50000",
          impressions: "53466",
          clicks: "474",
          startDate: "23/11/2022",
          endDate: "04/01/2023",
          audience: "General",
        },
        {
          type: "RATE",
          company: "RPC",
          campaignName: "RPC 2022/23 - 75k",
          Deadline: "09/01/2023",
          neededImpressions: "75000",
          impressions: "76394",
          clicks: "642",
          startDate: "01/10/2022",
          endDate: "09/01/2023",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Mott Mcdonald",
          campaignName: "Mott MacDonald 2022/23 STEM - 75k",
          Deadline: "04/01/2023",
          neededImpressions: "75000",
          impressions: "103641",
          clicks: "1202",
          startDate: "23/11/2022",
          endDate: "04/01/2023",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "M&G",
          campaignName: "M&G 2022/23 - 50k - Scotland",
          Deadline: "2/1/2023",
          neededImpressions: "50000",
          impressions: "61251",
          clicks: "724",
          startDate: "01/12/2022",
          endDate: "06/01/2023",
          audience: "Location",
        },
        {
          type: "RMA",
          company: "BAE Systems",
          campaignName: "BAE Systems",
          Deadline: "08/01/2023",
          neededImpressions: "1000",
          impressions: "7237",
          clicks: "72",
          startDate: "20/12/2022",
          endDate: "",
          audience: "",
        },
        {
          type: "RATE",
          company: "LCR ",
          campaignName: "LCR 2022/23 - 50k",
          Deadline: "31/12/2022",
          neededImpressions: "50000",
          impressions: "60891",
          clicks: "553",
          startDate: "07/11/2022",
          endDate: "17/01/2023",
          audience: "Last year/Grad",
        },
        {
          type: "RATE",
          company: "Hilton",
          campaignName: "Hilton 2022/23 - 50k - BAME",
          Deadline: "4/1",
          neededImpressions: "50000",
          impressions: "52805",
          clicks: "451",
          startDate: "07/12/2022",
          endDate: "03/01/2023",
          audience: "BAME/NON-RUSSEL",
        },
        {
          type: "RATE",
          company: "BAE Systems #3 of 4",
          campaignName: "BAE Systems 2022/23 STEM #3 - 50k",
          Deadline: "09/01/2023",
          neededImpressions: "50000",
          impressions: "69079",
          clicks: "936",
          startDate: "06/12/2022",
          endDate: "09/01/2023",
          audience: "STEM",
        },
        {
          type: "RATE",
          company: "Travelport",
          campaignName: "Travelport 2022/23 - 10k Location",
          Deadline: "04/01/2023",
          neededImpressions: "10000",
          impressions: "15890",
          clicks: "219",
          startDate: "06/01/2023",
          endDate: "03/01/2023",
          audience: "Location",
        },
        {
          type: "RATE",
          company: "Virgin Media 02",
          campaignName: "Virgin Media O2 - 2022/23 - 50k",
          Deadline: "30/12/2022",
          neededImpressions: "50000",
          impressions: "52088",
          clicks: "293",
          startDate: "16/12/2022",
          endDate: "30/12/2022",
          audience: "General",
        },
        {
          type: "RATE",
          company: "Lane C. & P",
          campaignName: "Lane Clark & Peacock 2022/23 - 50k",
          Deadline: "17/01/2023",
          neededImpressions: "50000",
          impressions: "46753",
          clicks: "528",
          startDate: "12/11/2022",
          endDate: "17/01/2023",
          audience: "General ",        },
        {
          type: "RATE",
          company: "Abrdn",
          campaignName: "Abrdn 2022/23 - 75k Females",
          Deadline: "09/01/2023",
          neededImpressions: "75000",
          impressions: "105746",
          clicks: "962",
          startDate: "24/11/2022",
          endDate: "09/01/2023",
          audience: "Females",
        },
        {
          type: "RATE",
          company: "HSBC",
          campaignName: "HSBC 2022/23 - 50k",
          Deadline: "20/01/2022",
          neededImpressions: "100000",
          impressions: "51520",
          clicks: "837",
          startDate: "06/01/2023",
          endDate: "20/01/2023",
          audience: "General",        },
        {
          type: "RATE",
          company: "BDO - OCP Campaign",
          campaignName: "BDO 2022/23 - Comp - 100K",
          Deadline: "26/01/2023",
          neededImpressions: "114172",
          impressions: "843",
          clicks: "44880",
          startDate: "",
          endDate: "26/01/2023",
          audience: "Comp",       },
        {
          type: "RMA",
          company: "Virgin Media",
          campaignName: "Virgin Media O2 2022/23 - Females 20k",
          Deadline: "28/02/2023",
          neededImpressions: "20000",
          impressions: "31102",
          clicks: "194",
          startDate: "10/01/2023",
          endDate: "26/01/2023",
          audience: "Females",
        },
        {
          type: "RMA",
          company: "Evelyn",
          campaignName: "Evelyn 2022/23 - Females 25k",
          Deadline: "31/01/2023",
          neededImpressions: "25000",
          impressions: "39282",
          clicks: "312",
          startDate: "09/12/2022",
          endDate: "26/01/2023",
          audience: "Females",
        },
        {
          type: "RMA",
          company: "BDO - OCP Campaign",
          campaignName: "BDO 2022/23 - Comp - 100k",
          Deadline: "26/01/2023",
          neededImpressions: "100000",
          impressions: "40935",
          clicks: "375",
          startDate: "15/11/2022",
          endDate: "26/01/2023",
          audience: "Comp",        
        },
      ];
  
  // Get references to HTML elements
  let typeSelect = document.getElementById("companyFilter");
  let searchBtn = document.getElementById("searchButton");
  let cardContainer = document.getElementById("campaigns");
  
  // Add event listener for search button
  searchBtn.addEventListener("click", function() {
    // Get selected type and company from user input
    let selectedtype = typeSelect.value;
    let companySearch = document.getElementById("searchField").value;
  
    // Filter data based on user input
    let filteredData = data;
    if (selectedtype !== null) {
      filteredData = filteredData.filter(function(item) {
        console.log(filteredData);
        return item.type === selectedtype;
      });
    }
  
    if (companySearch.length > 0) {
      filteredData = filteredData.filter(function(item) {
        return item.company.toLowerCase().includes(companySearch.toLowerCase());
      });
    }
  
    // Clear cards container
    while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
    }
  
    // Generate and display cards for filtered data
    for (let item of filteredData) {
      // Create card element
      let card = document.createElement("div");
      card.classList.add("card");
  

      let progress = (item.impressions / item.neededImpressions) * 100;
      // Create card content
      let cardContent = `
        <div class="card-body">
          <h5 class="card-title">${item.company}</h5>
          <h6 class="card-title"><span style="color: ${item.type === "RATE" ? '#015cb3' : '#ea5a1c'}">${item.campaignName}</span></h6>
          <p class="card-text">
            <strong>Start Date:</strong> ${item.startDate}<br>
            <strong>End Date:</strong> ${item.endDate}<br>
            <strong>Impressions:</strong> ${item.impressions}<br>
            <strong>Audience:</strong> ${item.audience}<br>
            <strong>Clicks:</strong> ${item.clicks}<br>
            <strong>Needed Impressions:</strong> ${item.neededImpressions}<br>
            <div class="progress">
  <div class="progress-bar ${progress < 98 ? 'bg-danger' : 'bg-success'} bg-success progressBar" role="progressbar" style="width: ${(JSON.stringify(item.impressions / item.neededImpressions) * 100).toFixed(2)}%" aria-valuenow="${(JSON.stringify(item.impressions / item.neededImpressions) * 100).toFixed(2)}" aria-valuemin="0" aria-valuemax="100"><strong>${(JSON.stringify(item.impressions / item.neededImpressions) * 100).toFixed(2)}%</strong %</div>
</div>
            </p>
          </div>
        `
        card.innerHTML = cardContent;
    
        // Append card to cards container
        cardContainer.appendChild(card);
      }
    });
    
       
  