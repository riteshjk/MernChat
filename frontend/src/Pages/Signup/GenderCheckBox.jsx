const GenderCheckbox = ({handleInputValueChange}) => {

	const handleCheckboxChange = (e) => {
		const gender = e.target.checked ? e.target.id : '';
		handleInputValueChange({ target: { id: 'gender', value: gender } });
	  };
	  
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer `}>
					<span className='label-text'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						id="male"
						onChange={handleCheckboxChange}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer `}>
					<span className='label-text'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						id="female"
						onChange={handleCheckboxChange}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;