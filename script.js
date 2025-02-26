document.addEventListener("DOMContentLoaded", () => {
    const balloons = document.querySelectorAll(".balloon");

    // Hiển thị chữ trên bóng bay
    balloons.forEach((balloon) => {
        balloon.innerHTML = balloon.getAttribute("data-letter");
    });
});
