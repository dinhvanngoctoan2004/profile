        // JAVASCRIPT NẰM TRONG NÀY

        document.addEventListener("DOMContentLoaded", function() {
          
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        
                        // 1. Lấy tên class animation từ thuộc tính "data-"
                        const animationClass = entry.target.dataset.animationClass;
                        
                        if (animationClass) {
                            // 2. Thêm class animation đó vào phần tử
                            entry.target.classList.add(animationClass);
                        }
                        
                        // 3. Xóa class "ẩn"
                        entry.target.classList.remove('hidden-on-scroll');
                        
                        // 4. Dừng theo dõi
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2 // Kích hoạt khi 20% box lọt vào màn hình
            });

            // Lấy TẤT CẢ các phần tử có class 'hidden-on-scroll'
            const hiddenElements = document.querySelectorAll('.hidden-on-scroll');
            
            // Bảo observer theo dõi từng phần tử
            hiddenElements.forEach((el) => observer.observe(el));
          
        });