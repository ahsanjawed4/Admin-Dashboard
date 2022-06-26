// Start Processing
function startProcessing() {
    KTApp.blockPage({
        baseZ: 500,
        overlayColor: '#000000',
        type: 'v1',
        state: 'danger',
        opacity: 0.15,
        message: 'Processing, Please Wait...'
    });
}

// Stop Processing
function stopProcessing() {
    KTApp.unblockPage();
}

// Page loading
function pageLoading() {
    KTApp.blockPage({
        baseZ: 500,
        overlayColor: '#000000',
        type: 'v1',
        state: 'danger',
        opacity: 0.15,
        message: 'Please Wait...'
    });
    setTimeout(function () {
        KTApp.unblockPage();
    }, 2500);
}

// Saving/ Managubg Data Loading
function dataProcessing() {
    KTApp.blockPage({
        baseZ: 2000,
        overlayColor: '#000000',
        type: 'v1',
        state: 'danger',
        opacity: 0.15,
        message: 'Processing...'
    });
}

// Error Alert with custom message
function submissionErrorAlertMessage($message) {
    swal.fire({
        "title": "",
        "text": $message,
        "type": "error",
        "icon": "error",
        "confirmButtonClass": "btn btn-secondary",
        "onClose": function (e) {
            console.log('on close event fired!');
        }
    })
}

// Error Alert
function submissionErrorAlert() {
    swal.fire({
        "title": "",
        "text": "There are some errors in your submission, Please fix them.",
        "type": "error",
        "icon": "error",
        "confirmButtonClass": "btn btn-secondary",
        "onClose": function (e) {
            console.log('on close event fired!');
        }
    })
}

// Success Alert
function submissionSuccessAlert($path = null) {
    console.log($path);
    swal.fire({
        "title": "",
        "text": "Saved Successfully",
        "type": "success",
        "icon": "success",
        "buttonsStyling": true,
        "confirmButtonText": "OK",
        "onClose": function (e) {
            if ($path === null) {
                console.log('on close event fired!');
            } else {
                window.location.href = $path;
            }
        }
    })
}

// Delete Alert
function archiveFunction($id = null) {
    swal.fire({
        "title": 'Are you sure?',
        "text": "It will permanently deleted !",
        "type": 'warning',
        "showCancelButton": true,
        "confirmButtonColor": '#3085d6',
        "cancelButtonColor": '#d33',
        "confirmButtonText": 'Yes, delete it!'
    }).then((result) => {
        if (result['isConfirmed']) {
            deleteRecord($id);
        }
    })
}


// Bootstrap Notification
function notificationMessage($type, $title, $message) {
    $.notify({
        title: $title,
        message: $message,
    }, {
        type: $type,
        allow_dismiss: true,
        showProgressbar: false,
        newest_on_top: true,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        placement: {
            from: "top",
            align: "right"
        },
        offset: {
            x: 30,
            y: 30
        },
        spacing: 10,
        z_index: 10000,
        delay: 1000,
        timer: 2000,
    });
}

// Allow access to data
function allowAccess() {
    $('#main-content-area-noaccess').css("display", "none");
    $('#main-content-area').css("display", "block");
    console.log('Allow Access');
}

// Allow access to data
function disallowAccess() {
    $('#main-content-area').css("display", "none");
    $('#main-content-area-noaccess').css("display", "block");
    console.log('Disallow Access');
}

// date picker
$('.datepicker').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true

});

// date time picker
$('.datetimepicker').datetimepicker();

// validate numaric fields
$('.numaric').on('change, keyup', function () {
    var currentInput = $(this).val();
    var fixedInput = currentInput.replace(/[A-Za-z!@#$%^&*()]/g, '');
    $(this).val(fixedInput);
    console.log(fixedInput);
});

// Date Time Picker Settings
var DispatchDatetimepickers = function () {

    // Private functions
    var baseDateTimePickersSetup = function () {
        // Oneway Date Time Picker
        $('#oneway_datetimepicker').datetimepicker({
            format: 'Y-M-D H:m',
            minDate: new Date()
        });

        // Return Date Time Picker
        $('#return_datetimepicker').datetimepicker({
            format: 'Y-M-D H:m',
            minDate:new Date()
        });
    }

    return {
        // Public functions
        init: function () {
            baseDateTimePickersSetup();
        }
    };

}();

// Number Counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Charts Setup
var KTWidgets = function () {
    var _initChartsWidget1 = function () {
        var element = document.getElementById("kt_charts_widget_1_chart");

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 44, 55, 57, 56, 61, 58]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 76, 85, 101, 98, 87, 105]
            }],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['30%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTApp.getSettings()['colors']['gray']['gray-500'],
                        fontSize: '12px',
                        fontFamily: KTApp.getSettings()['font-family']
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTApp.getSettings()['colors']['gray']['gray-500'],
                        fontSize: '12px',
                        fontFamily: KTApp.getSettings()['font-family']
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    fontFamily: KTApp.getSettings()['font-family']
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['gray']['gray-300']],
            grid: {
                borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var _initChartsWidget2 = function () {
        var element = document.getElementById("kt_charts_widget_2_chart");

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 44, 55, 57, 56, 61, 58]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 76, 85, 101, 98, 87, 105]
            }],
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['30%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTApp.getSettings()['colors']['gray']['gray-500'],
                        fontSize: '12px',
                        fontFamily: KTApp.getSettings()['font-family']
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTApp.getSettings()['colors']['gray']['gray-500'],
                        fontSize: '12px',
                        fontFamily: KTApp.getSettings()['font-family']
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    fontFamily: KTApp.getSettings()['font-family']
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['gray']['gray-300']],
            grid: {
                borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    // Public methods
    return {
        init: function () {
            // Charts Widgets
            _initChartsWidget1();
            _initChartsWidget2();
        }
    }

}();

// Initiate Methods
jQuery(document).ready(function () {
    DispatchDatetimepickers.init();
    KTWidgets.init();
});
