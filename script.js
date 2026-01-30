let user = { firstName: "", lastName: "", score: 0 };
let currentScene = 0;

const stories = {
    student: [
        { 
            topic: "التحرش اللفظي",
            title: "المشهد الأول: في الطريق", 
            text: "بينما كانت 'وعي' تسير للمدرسة، حاول شخص غريب استدراجها بالحديث وملاحقتها.. ماذا تفعل؟", 
            options: [
                { text: "تتجاهله وتسرع لمكان به ناس", correct: true, feedback: "ممتاز في حماية نفسك من الغرباء." },
                { text: "تقف لتعاتبه وتجادله", correct: false, feedback: "حذارِ، الجدال مع الغرباء قد يعرضك للخطر." }
            ] 
        },
        { 
            topic: "التنمر",
            title: "المشهد الثاني: في الفسحة", 
            text: "رأت 'وعي' زملاءها يسخرون من طالب جديد بسبب ملابسه البسيطة.. كيف تتصرف؟", 
            options: [
                { text: "تدافع عنه بلطف وتدعه يلعب معها", correct: true, feedback: "شجاعة أخلاقية رائعة في مواجهة التنمر." },
                { text: "تلتزم الصمت لتجنب المشاكل", correct: false, feedback: "السكوت عن التنمر يساعد على انتشاره." }
            ] 
        },
        { 
            topic: "الإدمان الرقمي",
            title: "المشهد الثالث: وقت المذاكرة", 
            text: "أمسكت 'وعي' هاتفها لتبحث عن معلومة، فجذبتها الألعاب ومقاطع الفيديو وضاع الوقت..", 
            options: [
                { text: "تغلق الهاتف فوراً وتلتزم بجدولها", correct: true, feedback: "ذكاء في إدارة الوقت وتجنب الإدمان الرقمي." },
                { text: "تستمر في اللعب وتؤجل المذاكرة", correct: false, feedback: "الإفراط في الشاشات يؤثر على مستقبلك وصحتك." }
            ] 
        },
        { 
            topic: "الابتزاز الإلكتروني",
            title: "المشهد الرابع: رسالة غامضة", 
            text: "وصلت لـ 'وعي' رسالة من مجهول يطلب صورها مقابل فتح مراحل جديدة في لعبة..", 
            options: [
                { text: "تحظر الحساب وتخبر والديها", correct: true, feedback: "وعي ممتاز بمخاطر الابتزاز الإلكتروني." },
                { text: "ترسل صورة واحدة لتجربة اللعبة", correct: false, feedback: "لا تشاركي صورك أبداً؛ الابتزاز يبدأ بصورة." }
            ] 
        },
        { 
            topic: "الوحدة والعزلة",
            title: "المشهد الخامس: بعد المدرسة", 
            text: "شعرت 'وعي' بالوحدة والرغبة في الانعزال تماماً عن عائلتها والبقاء في غرفتها مظلمة..", 
            options: [
                { text: "تخرج للجلوس مع عائلتها وتحكي يومها", correct: true, feedback: "التواصل الاجتماعي يحميك من مخاطر الوحدة." },
                { text: "تستسلم للعزلة وترفض الحديث مع أحد", correct: false, feedback: "العزلة المستمرة تضعف الشخصية وتزيد الحزن." }
            ] 
        },
       { 
    topic: "ضعف الثقة بالنفس",
    title: "المشهد السادس: على مواقع التواصل", 
    text: "كانت 'وعي' تتصفح مواقع التواصل، وبدأت تقارن نفسها بصور زميلاتها وتشعر أنها أقل منهم.. ماذا تفعل؟", 
    options: [
        { 
            text: "تتذكر أن لكل شخص مميزاته وتغلق التطبيق", 
            correct: true, 
            feedback: "تصرف ذكي، المقارنات تضعف الثقة بالنفس بدون سبب حقيقي." 
        },
        { 
            text: "تستمر في المقارنة وتشعر بالحزن", 
            correct: false, 
            feedback: "المقارنة المستمرة على الإنترنت تؤدي لضعف الثقة بالنفس والحزن." 
        }
    ] 
}

    ]
};

let analysisReport = [];

function handleLogin() {
    user.firstName = document.getElementById('firstName').value;
    user.lastName = document.getElementById('lastName').value;

    if (!user.firstName || !user.lastName) {
        return alert("من فضلك أدخلي الاسم");
    }

    document.getElementById('step1').classList.remove('active');
    document.getElementById('storyStep').classList.add('active');
    showScene();
}



function showScene() {
    const sceneList = stories.student; // كلاهما يمر بنفس المواقف للوعي
    if (currentScene < sceneList.length) {
        const scene = sceneList[currentScene];
        document.getElementById('storyTitle').innerText = scene.title;
        document.getElementById('storyText').innerText = scene.text;
        document.getElementById('progress').style.width = ((currentScene / sceneList.length) * 100) + "%";
        
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = "";
        
        scene.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "option-btn";
            btn.innerText = opt.text;
            btn.onclick = () => {
                analysisReport.push(`🔹 ${scene.topic}: ${opt.feedback}`);
                if(opt.correct) user.score++;
                
                currentScene++;
                showScene();
            };
            optionsDiv.appendChild(btn);
        });
    } else { finishStory(); }
}

function finishStory() {
    document.getElementById('storyStep').classList.remove('active');
    document.getElementById('resultStep').classList.add('active');
    
    // بناء الرسالة النهائية
    let reportHTML = `<h3>تحليل رحلتك يا ${user.firstName}:</h3>`;
    reportHTML += `<div style="text-align:right; margin:20px 0;">` + analysisReport.join('<br>') + `</div>`;
    reportHTML += `<p><strong>تقييم الوعي الإجمالي: ${user.score} من 6</strong></p>`;
    
    document.getElementById('analysisText').innerHTML = reportHTML;

    // إرسال النتيجة المختصرة لقاعدة البيانات
    let formData = new FormData();
    formData.append('fName', user.firstName);
    formData.append('lName', user.lastName);
    formData.append('role', user.role);
    formData.append('result', `النتيجة: ${user.score}/6`);
    fetch('saveUser.php', { method: 'POST', body: formData });
}