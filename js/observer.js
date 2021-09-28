export function observer(target) {
    let options = { threshold: [0.4, 0.6] };

    let observer = new IntersectionObserver(onTarget, options);
    let elements = document.querySelectorAll(target);

    elements.forEach(element => {
        element.classList.add("io-hidden");
        observer.observe(element);
    });

    function onTarget (entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('io-show');
            }
            
        });
    }
}

