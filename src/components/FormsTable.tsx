import React, {FC} from 'react';

interface Form {
	_id: number;
	name: string;
	email: string;
	project_name: string;
}
const FormsTable: FC<{forms: Form[]}> = ({forms}) => {
	const tableHeaders = ['Name', 'Email', 'Project Name'];

	return (
		<table className="w-full border-gray-200 border-2">
			<thead>
				<tr className="border-b-2">
					{tableHeaders.map((tableHeader, index) => (
						<th
							key={tableHeader}
							className={`pt-8 pb-2 w-1/3 pr-3 ${
								index !== tableHeaders.length ? 'border-r-2' : ''
							}`}
						>
							{tableHeader}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{forms.map((form, index) => (
					<tr key={form._id}>
						<td className="w-1/3 py-5 px-5 border-r-2 text-center">
							{form.name}
						</td>
						<td className="w-1/3 py-5 px-5 border-r-2 text-center">
							{form.email}
						</td>
						<td className="w-1/3 py-5 px-5 border-r-2 text-center">
							{form.project_name}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default FormsTable;