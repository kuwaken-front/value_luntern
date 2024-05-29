window.onload = () => {
  const submitButton = document.getElementById('submitButton')!;
  submitButton.addEventListener('click', () => {
      const flameAnswer = (document.getElementById('flameAnswer') as HTMLInputElement).value;
      const protectionAnswer = (document.getElementById('protectionAnswer') as HTMLInputElement).value;
      const handleAnswer = (document.getElementById('handleAnswer') as HTMLInputElement).value;
      const lightAnswer = (document.getElementById('lightAnswer') as HTMLInputElement).value;

      if (flameAnswer.trim() !== "") {
          console.log(`炎に関する回答: ${flameAnswer}`);
      }


      if (protectionAnswer.trim() !== "") {
          console.log(`プロテクションに関する回答: ${protectionAnswer}`);
      }


      if (handleAnswer.trim() !== "") {
          console.log(`ハンドルに関する回答: ${handleAnswer}`);
      }

      if (lightAnswer.trim() !== "") {
          console.log(`ライトに関する回答: ${lightAnswer}`);
      }
  });
}
