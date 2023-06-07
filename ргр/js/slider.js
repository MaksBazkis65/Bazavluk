// Получаем необходимые элементы
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

// Устанавливаем начальный индекс слайда
let slideIndex = 0;

// Функция для отображения текущего слайда
function showSlide(index) {
  // Скрыть все изображения
  sliderImages.forEach((image) => {
    image.style.display = 'none';
  });

  // Показать текущий слайд
  sliderImages[index].style.display = 'block';
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderImages.length - 1;
  }
  showSlide(slideIndex);
}

// Функция для переключения на следующий слайд
function nextSlide() {
  slideIndex++;
  if (slideIndex >= sliderImages.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Прикрепляем обработчики событий к кнопкам
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Запускаем автоматическую прокрутку слайдов
setInterval(nextSlide, 3000);
