$(document).ready(function () {
  $(".menubar > a").click(function () {
    $(".slide-toggle").not($(this).next()).slideUp("slow");
    $(this).next(".slide-toggle").slideToggle("slow");
  });

  // $(".menubar > a").click(function () {

  //   $(".trns-ico").not($(this).next()).toggleClass("rotate");
  // });

  $(".menubar > a").click(function () {
    $(".trns-ico").not($(this).find(".trns-ico")).removeClass("rotate");

    // Toggle only the clicked icon
    $(this).find(".trns-ico").toggleClass("rotate");
  });

  $(".dropdown1 > a").click(function (e) {
    e.preventDefault();

    $(".dropdown-menu1").not($(this).next()).slideUp("slow");

    $(this).next(".dropdown-menu1").slideToggle("slow");

    e.stopPropagation();
  });

  $(document).click(function () {
    $(".dropdown-menu1").slideUp("slow");
  });

  $(".hide-sidebar").click(function () {
    $(".sidebar").not($(this).toggleClass("show"));
    $(".sidebar").toggleClass("show");
  });

  $(".hide-sidebar").click(function () {
    $(".main-navbar, .main-area").toggleClass("expanded");
  });

  $(".dnone").click(function () {
    $(".header").toggle();
    if ($(".header").is(":visible")) {
      $(".main-area").css({ "margin-top": "40px" }); 
    } else {
      $(".main-area").css({ "margin-top": "0px" }); 
    }

    $(".trns-up").toggleClass("rotate");
  });

  // attendance graph

  const ctx = document.getElementById("attendanceChart").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Present", "Late", "Permission", "Absent"],
      datasets: [
        {
          label: "Attendance",
          data: [40, 20, 30, 10], // Corresponding percentages
          backgroundColor: ["#0c4b5e", "#18c95a", "#ffc108", "#e70d0d"], // Colors for each section
          hoverOffset: 4,
          borderWidth: 5,
          borderColor: "#ffffff",
          padding: {
            bottom: 10,
            top: 10,
          },
          borderRadius: 10,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.raw || 0;
              return `${label}: ${value}%`;
            },
          },
        },
        legend: {
          display: false,
          position: "bottom",
        },
        title: {
          display: true,
          font: {
            size: 16,
            weight: "bold",
          },
          padding: {
            top: 10,
            bottom: 20,
          },
          margin: {
            top: 10,
            bottom: 30,
          },
        },
      },
      cutout: "50%", // Controls the size of t
      rotation: 260,
      circumference: 200,
    },
  });

  // Plugin ko extend karein
  dayjs.extend(window.dayjs_plugin_quarterOfYear);

  // employee graph

  var options = {
    series: [
      {
        data: [80, 110, 80, 20, 60, 100],
      },
    ],
    chart: {
      type: "bar",
      height: 210,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: "end",
        horizontal: true,
        barHeight: "50%",
        boxSizing: "border-box",
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft: 40,
        marginRight: 40,
      },
    },
    grid: {
      show: true,
      borderColor: "#F2F3F5",
      strokeDashArray: 5,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "UI/UX",
        "Development",
        "Management",
        "HR",
        "Testing",
        "Marketing",
      ],
    },
    colors: ["#F26522"],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  // sales graph

  var options_1 = {
    series: [
      {
        name: "sales",
        data: [40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80],
      },
    ],
    chart: {
      type: "bar",
      height: 380,
    },
    plotOptions: {
      bar: {
        borderRadiusApplication: "end",
        borderRadius: 5, // yahaan 5 aapki ichha anusar ho sakta hai
      },
    },
    grid: {
      show: true,
      borderColor: "#F2F3F5",
      strokeDashArray: 5,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#F26522"],
    title: {
      text: "Grouped Labels on the X-axis",
    },
  };
  var chart_1 = new ApexCharts(document.querySelector("#chart1"), options_1);
  chart_1.render();
  console.log("hello!");

  // task-statistics graph

  const ctxTaskStatistics = document
    .getElementById("attendanceChart1")
    .getContext("2d");
  new Chart(ctxTaskStatistics, {
    type: "doughnut",
    data: {
      labels: ["Task A", "Task B", "Task C", "Task D"],
      datasets: [
        {
          label: "Task Statistics",
          data: [20, 40, 20, 10], // Example data
          backgroundColor: ["#FFC108", "#1B84FF", "#18C95A", "#E70D0D"],
          hoverOffset: 4,
          cutout: "75%",
          borderRadius: 80,
          spacing: -80,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: "Task Statistics Doughnut Chart",
        },
      },
      cutout: "80%", // Controls the size of t
      rotation: 275,
      circumference: 160,
    },
  });
});
