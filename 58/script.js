const data = [{
        email: "me@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "you@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "them@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "me@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "you@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "them@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "me@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "you@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "them@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "me@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "you@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    },
    {
        email: "them@mail.com",
        verified: true,
        roles: ["super"],
        language: "en"
    }
];

(async function() {
    const mod = await
    import (
        "https://cdn.skypack.dev/pin/tabulator-tables@v5.0.7-vGtDkKjV9T1fmkgGx42u/mode=imports/optimized/tabulator-tables.js"
    );

    const userTable = new mod.TabulatorFull(
        document.getElementById("userTable"), {
            columns: [{
                    title: "Email",
                    field: "email",
                    headerTooltip: "Account EMail"
                },
                {
                    title: "Verified",
                    field: "verified",
                    formatter: "tickCross"
                },
                {
                    title: "Language",
                    field: "language"
                },
                {
                    field: "roles",
                    title: "Roles"
                }
            ],
            layout: "fitDataFill",
            maxHeight: "100%"
        }
    );

    userTable.on("tableBuilt", function() {
        userTable.setData(data);
    });
})();