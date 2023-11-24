import React from "react";
import Pie from "../../../../charts/pie_charts/pie";
import DoughnutPieChart from "../../../../charts/pie_charts/doughnut_pie_chart";

const ProjectDashboardPieCharts = ({tasksPieChart, priorityPieChart}) => {
    return (
        <div className="flex justify-around mt-10">
            <Pie data={[
                { id: 0, value: tasksPieChart?.completedTasks, label: 'Completed' },
                { id: 1, value: tasksPieChart?.inCompleteTasks, label: 'Pending' },
            ]} />
            <DoughnutPieChart  data={[
                { id: 0, value: priorityPieChart?.high, label: 'High' },
                { id: 1, value: priorityPieChart?.medium, label: 'Medium' },
                { id: 2, value: priorityPieChart?.low, label: 'Low' }
            ]} />
        </div>
    )
}

export default ProjectDashboardPieCharts;