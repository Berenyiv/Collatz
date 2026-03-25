 // Ez a rész végzi a számítást (JavaScript)
        function szamolas() {
            let n = parseInt(document.getElementById('szamInput').value);
            let tartaly = document.getElementById('eredmeny');

            if (isNaN(n) || n < 1) {
                tartaly.innerHTML = "Adj meg egy normális számot!";
                return;
            }

            let sorozat = [];
            let maxErtek = n;

            // A számítási ciklus
            while (n !== 1) {
                sorozat.push(n);
                if (n > maxErtek) maxErtek = n; // Megjegyezzük a legmagasabb számot

                if (n % 2 === 0) {
                    n = n / 2;
                } else {
                    n = (n * 3) + 1;
                }
            }
            sorozat.push(1); // Az utolsó elem mindig 1

            // Kiírás a képernyőre
            tartaly.innerHTML = `
                <p class="csucs">Legmagasabb elért érték: ${maxErtek}</p>
                <p>Lépések száma: ${sorozat.length - 1}</p>
                <p><strong>Útvonal:</strong> ${sorozat.join(" → ")}</p>
            `;
        }

