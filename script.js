document.getElementById('key1').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '~';
});

document.getElementById('key2').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '1';
});

document.getElementById('key3').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '2';
});

document.getElementById('key4').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '3';
});

document.getElementById('key5').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '4';
});

document.getElementById('key6').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '5';
});

document.getElementById('key7').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '6';
});

document.getElementById('key8').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '7';
});

document.getElementById('key9').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '8';
});

document.getElementById('key10').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '9';
});

document.getElementById('key11').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '0';
});

document.getElementById('key12').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '-';
});

//back space
document.getElementById('key13').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value = textbox.value.slice(0, -1);
});

//tab
document.getElementById('key14').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

document.getElementById('key15').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'q';
});

document.getElementById('key16').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'w';
});

document.getElementById('key17').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'e';
});

document.getElementById('key18').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'r';
});

document.getElementById('key19').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 't';
});

document.getElementById('key20').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'y';
});

document.getElementById('key21').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'u';
});

document.getElementById('key22').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'i';
});

document.getElementById('key23').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'o';
});

document.getElementById('key24').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'p';
});

document.getElementById('key25').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '@';
});

document.getElementById('key26').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += "\\";
});

//caps
document.getElementById('key27').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

document.getElementById('key28').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'a';
});

document.getElementById('key29').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 's';
});

document.getElementById('key30').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'd';
});

document.getElementById('key31').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'f';
});

document.getElementById('key32').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'g';
});

document.getElementById('key33').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'h';
});

document.getElementById('key34').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'j';
});

document.getElementById('key35').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'k';
});

document.getElementById('key36').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'l';
});

document.getElementById('key37').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += ':';
});

document.getElementById('key38').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';

    var log = document.createElement('div');
    log.classList.add('log-entry');

    var command = textbox.value.toLowerCase();
    if (command.startsWith("/gamemode c")) {
        log.textContent = "[Logger] :" + "Your game mode has been updated to Creative";
    } else if (command.startsWith("/gamemode s")) {
        log.textContent = "[Logger] :" + "Your game mode has been updated to Survival";
    } else if (command.startsWith("/gamemode a")) {
        log.textContent = "[Logger] :" + "Your game mode has been updated to Adventure";
    } else if (command.startsWith("/gamemode spectator")) {
        log.textContent = "[Logger] :" + "Your game mode has been updated to Spectator";
    } else if (command.startsWith("/kill")) {
        log.textContent = "[Logger] :" + "Killed You";
    } else if (command.startsWith("/clear")) {
        log.textContent = "[Logger] :" + "Could not clear the inventory of You. no items to remove.";
    } else if (command.startsWith("/deop")) {
        log.textContent = "[Logger] :" + "De-opped: You";
    } else if (command.startsWith("/op")) {
        log.textContent = "[Logger] :" + "Opped: You";
    } else if (command.startsWith("/time set day")) {
        log.textContent = "[Logger] :" + "Set the time to 49000";
    } else if (command.startsWith("/time set midnight")) {
        log.textContent = "[Logger] :" + "Set the time to 66000";
    } else if (command.startsWith("/time set night")) {
        log.textContent = "[Logger] :" + "Set the time to 109000";
    } else if (command.startsWith("/time set noon")) {
        log.textContent = "[Logger] :" + "Set the time to 126000";
    } else if (command.startsWith("/time set sunrise")) {
        log.textContent = "[Logger] :" + "Set the time to 143000";
    } else if (command.startsWith("/time set sunset")) {
        log.textContent = "[Logger] :" + "Set the time to 156000";
    } else if (command.startsWith("/")) {
        log.textContent = "[Logger] :" + "Unknown command: Please check that the command exists and that you have permission to use it.";
    }

    var logContainer = document.getElementById('log');
    logContainer.appendChild(log);
});


//shift
document.getElementById('key39').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

document.getElementById('key40').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'z';
});

document.getElementById('key41').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'x';
});

document.getElementById('key42').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'c';
});

document.getElementById('key43').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'v';
});

document.getElementById('key44').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'b';
});

document.getElementById('key45').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'n';
});

document.getElementById('key46').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += 'm';
});

document.getElementById('key47').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '.';
});

document.getElementById('key48').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '/';
});

//right shit
document.getElementById('key49').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

//ctrl
document.getElementById('key50').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

//win
document.getElementById('key51').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

//alt
document.getElementById('key52').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

//space
document.getElementById('key53').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += ' ';
});

//r alt
document.getElementById('key54').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

//r ctrl
document.getElementById('key55').addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    textbox.value += '';
});

function isMobile() {
    const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return (window.navigator.userAgent.search(regexp) !== -1);
}

if (isMobile()) {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=no');
    }
    var keyboard = document.getElementById('keyboard');
    var textbox = document.getElementById('textbox');
    var text = document.getElementById('text');

    keyboard.style.top = '89%';

    textbox.style.top = '-230%';
    textbox.style.width = '730px';
    textbox.style.height = '65px';
    textbox.style.borderRadius = "32px"

    text.style.top = '-275%';
    text.style.fontSize = "35px"
}
