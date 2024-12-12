    const tooltips = document.querySelectorAll(".has-tooltip");

    tooltips.forEach(tooltip => {
        tooltip.addEventListener("click", (e) => {
            e.preventDefault();

            // Проверяем, есть ли активная подсказка для этого элемента
            const activeTooltip = document.querySelector(".tooltip_active");
            const tooltipText = tooltip.getAttribute("title");

            if (activeTooltip && activeTooltip.innerText === tooltipText) {
                // Если подсказка уже открыта, удаляем её
                activeTooltip.remove();
                return;
            }

            // Удаляем любую другую открытую подсказку
            if (activeTooltip) {
                activeTooltip.remove();
            }

            // Создаем новую подсказку
            const tooltipElement = document.createElement("div");
            tooltipElement.className = "tooltip tooltip_active";
            tooltipElement.innerText = tooltipText;

            document.body.appendChild(tooltipElement);

            // Расчет положения подсказки - ставим снизу посередине
            const tooltipRect = tooltipElement.getBoundingClientRect();
            const targetRect = tooltip.getBoundingClientRect();
//            console.log(tooltipRect)
//            console.log(targetRect)

            let top, left;
            top = targetRect.bottom + 5;
            left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);

            tooltipElement.style.top = `${top}px`;
            tooltipElement.style.left = `${left}px`;
        });
    });

