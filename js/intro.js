


function save_login()
{
	var e = document.getElementById('input_login');
    var login = e.value.trim();
    localStorage.setItem("g_saved_login", login);
    localStorage.setItem("g_my_login", login);
    if (login == '')
    {
		e.style.border = "2px solid red";
    }
    else
		setTimeout(()=>{ window.location = 'level1.html'; }, 100);
}

function start_eval()
{
	// Generate 3 random levels from 6 to 10
	var levels = [];
	while(levels.length < 3) {
		var lvl = Math.floor(6 + Math.random() * 5); // Random between 6-10
		if (!levels.includes(lvl)) {
			levels.push(lvl);
		}
	}
	// Sort them for better UX
	levels.sort();
	
    localStorage.setItem("g_my_login", '');
	localStorage.setItem("g_my_eval", JSON.stringify(levels));
	localStorage.setItem("g_eval_start_time", Date.now());
	
	setTimeout(()=>{ window.location = 'level'+levels[0]+'.html'; }, 100);
}

function go_to_level(level_num)
{
	var login = document.getElementById('input_login').value.trim();
	localStorage.setItem("g_saved_login", login);
	localStorage.setItem("g_my_login", login);
	localStorage.removeItem("g_my_eval");
	localStorage.removeItem("g_eval_start_time");
	setTimeout(()=>{ window.location = 'level'+level_num+'.html'; }, 100);
}


function load_login()
{
    var login;
    if (!(login = localStorage.getItem("g_saved_login")))
        login = ''; // will means full random during sim.
    return (login);
}


function showTab(nb)
{
	for (let i = 0; i < 3; i++)
	{
		if (i == nb)
		{
			document.getElementById("tab_"+i).style.display = "flex";
			e = document.getElementById("button_"+i);
			e.style.color = "#000000";
			e.style.backgroundColor = "#FFFFFF";
			e.style.fontSize = "120%";
			e.style.borderTopWidth = "4px";
			e.style.marginTop = "0px";
			e.style.boxShadow = "5px 0px 5px gray";
		}
		else
		{
			document.getElementById("tab_"+i).style.display = "none";
			e = document.getElementById("button_"+i);
			e.style.color = "#333333";
			e.style.backgroundColor = "#CCCCCC";
			e.style.fontSize = "100%";
			e.style.borderTopWidth = "0px";
			e.style.marginTop = "4px";
			e.style.boxShadow = "3px 0px 5px gray";
		}
	}
}