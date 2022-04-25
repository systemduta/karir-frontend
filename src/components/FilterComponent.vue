<template>
  <div class="row justify-content-center" id="filterContainer">
    <div
      class="shadow rounded-pill text-center p-4 w-75"
      style="background-color: #e1e1e1; position: absolute; bottom: 0"
      id="filter"
    >
      <form class="row g-3 justify-content-center align-items-center">
        <div class="col-12 col-md-5">
          <input
            type="text"
            name="search"
            placeholder="Job title or keyword"
            class="form-control rounded-pill"
          />
        </div>
        <div class="col-12 col-md-5">
          <select name="category" class="form-select rounded-pill">
            <option value="">Filter</option>
          </select>
        </div>
        <div class="col-12 col-md-2">
          <button
            type="submit"
            class="rounded-pill text-white w-100"
            style="background-color: #434343"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const width = entry.contentRect.width;
        const filter = document.getElementById("filter");
        if (width < 772) {
          filter.classList.remove("rounded-pill");
          filter.classList.add("rounded-3");
        } else {
          filter.classList.add("rounded-pill");
          filter.classList.remove("rounded-3");
        }
      });
    });
    observer.observe(document.getElementById("filterContainer"));
  },
};
</script>
