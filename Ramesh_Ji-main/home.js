var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>ramesh kadariya</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px;
        }

        h1 {
            font-size: 2em;
        }

        main {
            text-align: center;
            margin: 20px;
        }

        p {
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to ramesh kadariya website</h1>
    </header>
    <main>
        <p>
            This is a simple text-only homepage. You can add your content here.
        </p>
        <p>
            Feel free to customize and style it as you like with CSS.
        </p>
    </main>
</body>
</html>
