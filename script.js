const incomeInput = document.getElementById('income');
const calculateButton = document.getElementById('calculate');
const resultsDiv = document.getElementById('results');
const jarsContainer = document.querySelector('.jars-container');

const jarPercentages = {
    'ของจำเป็น (N) - 50%': 0.5, 
    'กองทุนอิสรภาพทางการเงิน (FFA)': 0.1, 
    'เงินออมระยะยาว (LTS) - 10%': 0.1, 
    'การศึกษา (EDU) - 10%': 0.1, 
    'พักผ่อน (P) - 10%': 0.1,
    'บริจาค (G) - 10% (ไม่บังคับ)': 0.1 
};

calculateButton.addEventListener('click', () => {
    const income = parseFloat(incomeInput.value);

    if (income) {
        createJarStructure();
        calculateAndDisplayAmounts(income);
        resultsDiv.classList.remove('hidden'); 
    } else {
        alert('Please enter a valid income amount');
    }
});

function createJarStructure() {
    jarsContainer.innerHTML = ''; // Clear previous jars

    for (const jarName in jarPercentages) {
        const jarDiv = document.createElement('div');
        jarDiv.classList.add('jar');
        jarDiv.innerHTML = `
            <h2>${jarName} Jar</h2> 
            <p class="amount"></p> 
        `;
        jarsContainer.appendChild(jarDiv);
    }
}

function calculateAndDisplayAmounts(income) {
    const amounts = document.querySelectorAll('.amount'); 

    let i = 0;
    for (const jarName in jarPercentages) {         
        const amount = (income * jarPercentages[jarName]).toFixed(2);
        amounts[i].textContent = amount; 
        i++;
    }
}
