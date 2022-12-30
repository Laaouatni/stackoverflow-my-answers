<script>
  let formula = "1 / (1/10) + (1/30) + 1/50";
  let array = mathToJson(formula);

  function mathToJson(string) {
    const noSpace = string.replace(/\s+/g, "");

    console.log("brakets", getTextInsideBrackets(noSpace));
    console.log("split", splitTextBetweenMultDiv(noSpace));

    function splitTextBetweenMultDiv(string) {
      let isOpen = false;
      let index = 0;
      const MAX = string.length;

      while (index < MAX) {
        const character = string[index];

        if (character === "(") {
          isOpen = true;
        } else if (character === ")") {
          isOpen = false;
        }

        if (!isOpen) {
          if (["/", "*"].includes(character)) {
            return [string.slice(0, index), string.slice(index + 1)];
          }
        }

        index++;
      }
    }

    function getTextInsideBrackets(string) {
      let ResultArray = [];
      let thisString = [];
      let isOpen = false;

      string.split("").forEach((character) => {
        if (character === "(") {
          isOpen = true;
        } else if (character === ")") {
          isOpen = false;
          ResultArray.push(thisString.join(""));
          thisString = [];
        }

        if (isOpen) {
          if (character !== "(") {
            thisString.push(character);
          }
        }
      });

      return ResultArray;
    }
  }
</script>

<!-- <div class="flex gap-4 p-4 bg-blue-100 overflow-auto">
  {#each array as item}
    <div
      class="border-4 p-4 bg-white grid place-items-center hover:shadow-lg rounded-lg hover:scale-110 transition"
    >
      {item}
    </div>
  {/each}
</div> -->
