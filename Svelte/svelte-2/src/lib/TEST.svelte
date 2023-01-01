<script>
  const a = {
    values: [
      {
        values: [1, 1],
        operation: "+",
      },
      1,
    ],
    operation: "-",
  };

  const b = {
    values: [
      {
        values: [
          {
            values: [3, 2],
            operation: "+",
          },
          1,
        ],
        operation: "-",
      },
      5,
    ],
    operation: "+",
  };

  // 1+2/3
  const c = {
    values: [
      1,
      {
        values: [2, 3],
        operation: "/",
      },
    ],
    operation: "+",
  };

  // 2/3+1
  const d = {
    values: [
      {
        values: [2, 3],
        operation: "/",
      },
      1,
    ],
    operation: "+",
  };

  // 1/2+3/4+5/6
  const e = {
    values: [
      {
        values: [1, 2],
        operation: "/",
      },
      {
        values: [3, 4],
        operation: "/",
      },
      {
        values: [5, 6],
        operation: "/",
      },
    ],
    operation: "+",
  };

  // 1/2/3/4/5+6+7+8/9+10/11
  const f = {
    values: [
      {
        values: [1, 2, 3, 4, 5],
        operation: "/",
      },
      6,
      7,
      {
        values: [8, 9],
        operation: "/",
      },
      {
        values: [10, 11],
        operation: "/",
      },
    ],
    operation: "+",
  };

  // 10/2*5
  const g = {
    values: [
      {
        values: [10, 2],
        operation: "/",
      },
      5,
    ],
    operation: "*",
  };

  // 10/2*5+1-1*5/3+2*4
  const h = {
    values: [
      {
        values: [
          {
            values: [10, 2],
            operation: "/",
          },
          5,
        ],
        operation: "*",
      },
      1,
      {
        values: [
          {
            values: [-1, 5],
            operation: "*",
          },
          3,
        ],
        operation: "/",
      },
      {
        values: [2, 4],
        operation: "*",
      },
    ],
    operation: "+",
  };

  const i = {
    values: [
      {
        values: [
          {
            values: [
              {
                values: [
                  {
                    values: [10, 2],
                    operator: "/",
                  },
                  5,
                ],
                operator: "*",
              },
              1,
            ],
            operator: "+",
          },
          {
            values: [
              {
                values: [1, 5],
                operator: "*",
              },
              3,
            ],
            operator: "/",
          },
        ],
        operator: "-",
      },
      {
        values: [2, 4],
        operator: "*",
      },
    ],
    operator: "+",
  };

  // 1+2*(3+2)
  const u = {
    values: [
      1,
      {
        values: [
          2,
          {
            values: [3, 2],
            operation: "+",
          },
        ],
        operation: "*",
      },
    ],
  };

  // (1+2*3)*2
  const v = {
    values: [
      {
        values: [
          1,
          {
            values: [2, 3],
            operation: "*",
          },
        ],
        operation: "+",
      },
      2,
    ],
    operation: "*",
  };

  //
  const w = {
    values: [
      1,
      {
        values: [1, 2, 3],
        operation: "+",
      },
    ],
    operation: "-",
  };

  const l = {
    values: [
      {
        values: [1, 2],
        operation: "+",
      },
    ],
    operation: "-",
  };

  // (1/1/10)+1/30+1/50
  const m = {
    values: [
      {
        values: [1, 1, 10],
        operation: "/",
      },
      {
        values: [1, 30],
        operation: "/",
      },
      {
        values: [1, 50],
        operation: "/",
      },
    ],
    operation: "+",
  };
</script>