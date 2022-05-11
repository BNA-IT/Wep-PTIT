const cinemaBtns = document.querySelectorAll('.cinema-menu button')
const cinemaList = document.querySelectorAll('.cinema')

cinemaBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-cinema')

		// remove and set active fpr button
		document
			.querySelector('.cinema-menu button.active')
			.classList.remove('active')
		e.target.classList.add('active')

		// filter elements
		cinemaList.forEach((item) => {
			if (type == 'all' || item.getAttribute('type-cinema') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})
