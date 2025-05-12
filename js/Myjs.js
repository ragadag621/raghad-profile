// دالة للتنقل بين الأقسام
function showSection(id) {
    // جلب جميع الأقسام وإخفائها
    const sections = document.getElementsByClassName('section');
    for (const section of sections) {
        section.classList.remove('active');
    }

    // جلب القسم الذي تم اختياره وإظهاره
    const selectedSection = document.getElementById(id);
    selectedSection.classList.add('active');
}

// عندما يتم تحميل الصفحة، يظهر القسم الأول (مثلاً "عنّي")
window.onload = function() {
    showSection('about'); // يظهر قسم "عنّي" أولاً
};

function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
