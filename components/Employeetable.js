import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import '../styles/Employeetable.css'; // Assuming you have a separate CSS file for styles

const EmployeeTable = () => {

    useEffect(() => {
        const renderCharts = () => {
            const chartData = [
                { selector: "#chart1", data: [10, 15, 20, 15, 10], color: '#00E396' },
                { selector: "#chart2", data: [5, 10, 5, 10, 5], color: '#FEB019' },
                { selector: "#chart3", data: [15, 25, 30, 20, 15], color: '#008FFB' },
                { selector: "#chart4", data: [2, 5, 2, 5, 2], color: '#FF4560' },
                { selector: "#chart5", data: [10, 12, 14, 16, 18], color: '#775DD0' }
            ];

            chartData.forEach(({ selector, data, color }) => {
                if (document.querySelector(selector)) {
                    const options = {
                        chart: { type: 'bar', height: 20, width: 50, sparkline: { enabled: true } },
                        series: [{ data }],
                        colors: [color],
                        plotOptions: { bar: { columnWidth: '80%' } },
                        xaxis: { crosshairs: { width: 1 } },
                        yaxis: { min: 0 }
                    };

                    new ApexCharts(document.querySelector(selector), options).render();
                } else {
                    console.error(`Element with selector ${selector} not found.`);
                }
            });
        };

        renderCharts();
    }, []);

    return (
        <table className="employee-table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Performance</th>
                    <th>Graph</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEOTkyODcwNkFENjExRTg4RDMyRUM0MUI2RkNEQjg1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEOTkyODZGNkFENjExRTg4RDMyRUM0MUI2RkNEQjg1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OTA4OUI5QkREQTIwM0Q1MEQ1RDE1MjM1RDQ5NTczRiIgc3RSZWY6ZG9jdW1lbnRJRD0iOTkwODlCOUJEREEyMDNENTBENUQxNTIzNUQ0OTU3M0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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" alt="Avatar" /></td>
                    <td>Marshall Nichols</td>
                    <td>UI UX Designer</td>
                    <td><span className="badge good">Good</span></td>
                    <td><div id="chart1"></div></td>
                </tr>
                <tr>
                    <td><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIzMjE3N0M3NkFENjExRThBQUFDQTQyQTVGQjczOEVBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIzMjE3N0M2NkFENjExRThBQUFDQTQyQTVGQjczOEVBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OTA4OUI5QkREQTIwM0Q1MEQ1RDE1MjM1RDQ5NTczRiIgc3RSZWY6ZG9jdW1lbnRJRD0iOTkwODlCOUJEREEyMDNENTBENUQxNTIzNUQ0OTU3M0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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" alt="Avatar" /></td>
                    <td>Susie Willis</td>
                    <td>Designer</td>
                    <td><span className="badge average">Average</span></td>
                    <td><div id="chart2"></div></td>
                </tr>
                <tr>
                    <td><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QjA3RDVFNkFENjExRTg5OEU4RTA3RDgwNTMyN0MyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QjA3RDVENkFENjExRTg5OEU4RTA3RDgwNTMyN0MyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OTA4OUI5QkREQTIwM0Q1MEQ1RDE1MjM1RDQ5NTczRiIgc3RSZWY6ZG9jdW1lbnRJRD0iOTkwODlCOUJEREEyMDNENTBENUQxNTIzNUQ0OTU3M0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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" alt="Avatar" /></td>
                    <td>Francisco Vasquez</td>
                    <td>Team Leader</td>
                    <td><span className="badge excellent">Excellent</span></td>
                    <td><div id="chart3"></div></td>
                </tr>
                <tr>
                    <td><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJCM0U4NkU3NkFENjExRThBOEI1Qzg4NzdFNzZBNUUxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJCM0U4NkU2NkFENjExRThBOEI1Qzg4NzdFNzZBNUUxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OTA4OUI5QkREQTIwM0Q1MEQ1RDE1MjM1RDQ5NTczRiIgc3RSZWY6ZG9jdW1lbnRJRD0iOTkwODlCOUJEREEyMDNENTBENUQxNTIzNUQ0OTU3M0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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" alt="Avatar" /></td>
                    <td>Erin Gonzales</td>
                    <td>Android Developer</td>
                    <td><span className="badge weak">Weak</span></td>
                    <td><div id="chart4"></div></td>
                </tr>
                <tr>
                    <td><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4MkE5MEQ0NkFENjExRThBNjI1QzJFOUQ0Njc5NkVCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4MkE5MEQzNkFENjExRThBNjI1QzJFOUQ0Njc5NkVCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OTA4OUI5QkREQTIwM0Q1MEQ1RDE1MjM1RDQ5NTczRiIgc3RSZWY6ZG9jdW1lbnRJRD0iOTkwODlCOUJEREEyMDNENTBENUQxNTIzNUQ0OTU3M0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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" alt="Avatar" /></td>
                    <td>Ava Alexander</td>
                    <td>UI UX Designer</td>
                    <td><span className="badge good">Good</span></td>
                    <td><div id="chart5"></div></td>
                </tr>
            </tbody>
        </table>
    );
};

export default EmployeeTable;