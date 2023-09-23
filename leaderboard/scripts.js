
fetch("http://localhost:3000/users")
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("NETWORK RESPONSE ERROR");
		}
	})
	.then(data => {
		console.log("quiz", data)
			displayTabs(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));
	

function displayTabs(users) {
	
	var tabs = document.querySelectorAll(".lboard_tabs ul li");
	var today = document.querySelector(".today");
	var month = document.querySelector(".month");
	var year = document.querySelector(".year");
	var items = document.querySelectorAll(".lboard_item");
	tabs.forEach(function (tab) {
		tab.addEventListener("click", function () {
			var currenttab = tab.getAttribute("data-li");

			tabs.forEach(function (tab) {
				tab.classList.remove("active");
			})

			tab.classList.add("active");

			items.forEach(function (item) {
				item.style.display = "none";
			})

			if (currenttab == "today") {
				today.style.display = "block";
			}
			else if (currenttab == "month") {
				month.style.display = "block";
			}
			else {
				year.style.display = "block";
			}

		})
	})

     users.sort((a, b) => a.name - b.name)

	const lboard_quiz_data_div = document.getElementById("lboard_quiz_data");
	let maxScore = 5
	for (i = 0; i < users.length; i++) {


		const lboard_mem_div = document.createElement("div");
		lboard_mem_div.className = "lboard_mem";

		const img_div = document.createElement("div");
		img_div.className = "img";
		const user_image = document.createElement("img");
		user_image.src = users[i].userImage;
		img_div.appendChild(user_image)

		lboard_mem_div.appendChild(img_div)

		const name_bar_div = document.createElement("div");
		name_bar_div.className = "name_bar";
		const p_tag = document.createElement("p");
		// const span_tag = document.createElement("span");
		// span_tag.textContent = i+1
		// p_tag.appendChild(span_tag)
		p_tag.textContent = `${i + 1}.  ${users[i].name}`
		name_bar_div.appendChild(p_tag)

		const bar_wrap_div = document.createElement("div");
		bar_wrap_div.className = "bar_wrap";
		const inner_bar_div = document.createElement("div");
		inner_bar_div.className = "inner_bar";
		inner_bar_div.style.width = `${((users[i].quizProgress.score) / maxScore) * 100}%`

		bar_wrap_div.appendChild(inner_bar_div)

		name_bar_div.appendChild(bar_wrap_div)

		lboard_mem_div.appendChild(name_bar_div)

		const points_div = document.createElement("div");
		points_div.className = "points";

		points_div.innerHTML += `${(users[i].quizProgress.score) * 100}`

		lboard_mem_div.appendChild(points_div)

		lboard_quiz_data_div.appendChild(lboard_mem_div)

		{/* <div class="lboard_mem">
					<div class="img">
						<img src="prashareet.jpeg" alt="picture_1">
					</div>
					<div class="name_bar">
						<p><span>1.</span> Prashareet Choudhury</p>
						<div class="bar_wrap">
							<div class="inner_bar" style="width: 95%"></div>
						</div>
					</div>
					<div class="points">
						195 points
					</div>
				</div> */}
	}

}
