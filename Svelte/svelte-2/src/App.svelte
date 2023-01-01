<script>
  let formula = "1 / (1/10) + (1/30) + 1/50";
  let array = mathToJson(formula);

  function mathToJson(string) {
    let noSpace = string.replace(/ /g, "");

    const REGEX = {
      addition: /\+[^+()]*(?:\([^()]*\))?/g,
    };

    function getAdditionArray(string) {
      if (string[0] !== "-") string = "+" + string;

      const arrayResult = string.match(REGEX.addition).map((item) => {
        if (item[0] === "+") return item.slice(1);
        return item;
      });

      return {
        values: arrayResult,
        operation: "+",
      };
    }

    function recursion(array) {
      if (REGEX.addition.test(string)) {
        return array.map((item) => {
          return getAdditionArray(item);
        });
      }
    }

    console.log(recursion(getAdditionArray(noSpace).values));

    function getSubtractionArray(string) {
      const REGEX = /\-[^-()]*(?:\([^()]*\))?/g;
      if (string[0] !== "-") string = "+" + string;
      return string.match(REGEX);
    }

    function getBracketsArray(string) {
      const REGEX = /\(|\)/g;
      return string.split(REGEX).filter((item) => {
        if (item !== "") return item;
      });
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

hello