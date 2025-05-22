let web3;
let contract;

window.addEventListener('load', async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    contract = new web3.eth.Contract(contractABI, contractAddress);
  } else {
    alert("MetaMask yüklü değil!");
  }
});

async function issueCertificate() {
  const studentName = document.getElementById("studentName").value;
  const course = document.getElementById("course").value;
  const certificateId = document.getElementById("certificateId").value;
  const issueDate = document.getElementById("issueDate").value;

  const accounts = await web3.eth.getAccounts();
  await contract.methods.issueCertificate(studentName, course, certificateId, issueDate)
    .send({ from: accounts[0] });

  alert("Sertifika oluşturuldu!");
}

async function getCertificate() {
  const certId = document.getElementById("searchId").value;
  const result = await contract.methods.getCertificate(certId).call();

  if (!result.exists) {
    document.getElementById("result").innerText = "Sertifika bulunamadı.";
  } else {
    document.getElementById("result").innerText = `
    Öğrenci: ${result.studentName}
    Kurs: ${result.course}
    Tarih: ${result.issueDate}
    `;
  }
}
