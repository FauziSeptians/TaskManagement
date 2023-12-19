export default function handler(req, res) {
   const ObjectDataSidebar = {
        responseCode: 200,
        additionalData : [
            {
                Kategories : {
                    logo : "",
                    KategoriesName : "TODO LIST"
                },
                ListItem : [
                    {
                        id: "dwadawdawdawdawd",
                        Name: "Kerjaan"
                    },
                    {
                        id: "dwadawdawdawdawd",
                        Name: "Rumah"
                    }, {
                        id: "dwadawdawdawdawd",
                        Name: "Kuliah"
                    }
                ]

            },
            {
                Kategories : {
                    logo : "",
                    KategoriesName : "KEUANGAN"
                },
                ListItem : [
                    {
                        id: "dwadawdawdawdawd",
                        Name: "Keuangan Harian"
                    }, 
                ]

            },
            {
                Kategories : {
                    logo : "",
                    KategoriesName : "TO IMPROVE"
                },
                ListItem : [
                    {
                        id: "dwadawdawdawdawd",
                        Name: "Keuangan Harian"
                    }, 
                ]

            },
            {
                Kategories : {
                    logo : "",
                    KategoriesName : "TO IMPROVE"
                },
                ListItem : [
                    {
                        id: "dwadawdawdawdawd",
                        Name: "Keuangan Harian"
                    }, 
                ]

            }
        ]
   };
  res.status(200).send(ObjectDataSidebar)
}
