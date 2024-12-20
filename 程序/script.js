document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    
    if (!inputText) {
        alert("请输入文本！");
        return;
    }

    // 假设我们通过API检查重复
    checkText(inputText);
});

function checkText(text) {
    // 这里模拟返回一个重复率和重复部分
    const standardText = "这是一个示例文本，用于检查重复度。";
    const repeatRate = calculateRepeatRate(text, standardText);
    
    document.getElementById("result").innerHTML = `
        <h3>检查结果</h3>
        <p>重复率：${repeatRate}%</p>
        <p>重复部分：${standardText}</p>
    `;
}

function calculateRepeatRate(text1, text2) {
    // 简单计算相似度
    let commonWords = 0;
    const words1 = text1.split(" ");
    const words2 = text2.split(" ");

    words1.forEach(word => {
        if (words2.includes(word)) {
            commonWords++;
        }
    });

    return (commonWords / Math.max(words1.length, words2.length)) * 100;
}
