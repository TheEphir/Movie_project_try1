export function SearchFunc(props){
 const {search} = props
 
 return<div className="row">
    <div className="col s12">
      <div className="input-field">
        <input 
          placeholder="search" 
          type="search" 
          className="validate"
          value={search}
          onChange={(e)=> {search = e.target.value}}/>
      </div>
    </div>
  </div>
}