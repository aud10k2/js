

// Плавная прокрутка к любому элементу по его ID
function scrollToSection(sectionId) {

	const element = document.getElementById(sectionId);

	if (element) {
		window.scrollTo({
			top: element.offsetTop, // offsetTop - расстояние от верха документа до элемента
			behavior: 'smooth'
		});
	}
}

