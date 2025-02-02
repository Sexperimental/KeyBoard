document.addEventListener("DOMContentLoaded", function () {
    const keys = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', 'Back Space',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '@', '\\',
        'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', '/', 'Right Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'R Alt', 'Right Ctrl'
    ];

    const keyMappings = {
        key1: '~', key2: '1', key3: '2', key4: '3', key5: '4',
        key6: '5', key7: '6', key8: '7', key9: '8', key10: '9',
        key11: '0', key12: '-', key15: 'q', key16: 'w', key17: 'e',
        key18: 'r', key19: 't', key20: 'y', key21: 'u', key22: 'i',
        key23: 'o', key24: 'p', key25: '@', key26: '\\', key28: 'a',
        key29: 's', key30: 'd', key31: 'f', key32: 'g', key33: 'h',
        key34: 'j', key35: 'k', key36: 'l', key37: ':', key40: 'z',
        key41: 'x', key42: 'c', key43: 'v', key44: 'b', key45: 'n',
        key46: 'm', key47: '.', key48: '/', key53: ' '
    };

    const keyboard = document.getElementById('keyboard');

    keys.forEach((key, index) => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        keyDiv.id = `key${index + 1}`;
        keyDiv.textContent = key;
        keyboard.appendChild(keyDiv);
    });

    Object.keys(keyMappings).forEach(keyId => {
        const keyElement = document.getElementById(keyId);
        if (keyElement) {
            keyElement.addEventListener('click', function () {
                const textbox = document.getElementById('textbox');
                textbox.value += keyMappings[keyId];
            });
        }
    });

    //BackSpace
    document.getElementById('key13')?.addEventListener('click', function () {
        const textbox = document.getElementById('textbox');
        textbox.value = textbox.value.slice(0, -1);
    });

    //Enter
    document.getElementById('key38')?.addEventListener('click', function () {
        const textbox = document.getElementById('textbox');
        textbox.value = "";
    });

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    }

    if (isMobile()) {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=no');
        }
        const keyboard = document.getElementById('keyboard');
        const textbox = document.getElementById('textbox');
        const text = document.getElementById('text');

        keyboard.style.top = '89%';
        textbox.style.top = '-230%';
        textbox.style.width = '730px';
        textbox.style.height = '65px';
        textbox.style.borderRadius = "32px";
        text.style.top = '-275%';
        text.style.fontSize = "35px";
    }
});
