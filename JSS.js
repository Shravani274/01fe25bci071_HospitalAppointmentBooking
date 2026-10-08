let doctors = [
            {
                name: "Rohan", spe:"Heart",available: true,time:"10 to 11 in the morning"
            },
            {
               name:"Rakesh",spe:"Skin",available:"True",time:"12 to 1 in the afternoon" 
            },
            {
               name:"Sakshi",spe:"Dental",available:"True",time:"5 to 6 in the evening" 
            }
        ];

        function DoctorsDashboard() {
            let output = "";

            doctors.forEach(function(doctors, index) {
                output += "doctor Name:"+doctors.name +"//Specialized at:" + doctors.spe +"//Timing:"+doctors.time;
                output += "<hr>";
            });
            document.getElementById("result").innerHTML = output;
        }
    