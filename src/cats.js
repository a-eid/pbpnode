const _cats = [] 

export const create = cat => {
  // validation
  _cats.push(cat)
} 

export const update = (id , change) => {
  const i = _cats.findIndex(cat => cat.id === id)
  if(!i) return false 
  _cats[i] = Object.assign(_cats[i] , change) 
  return _cats[i]
}

export const getAll = () => [..._cats] 

export const getOne = id => {
  const cat = _cats.find( x => id === x.id)
  return cat  
}

export const deleteOne = id => {
  const i = _cats.findIndex(cat => cat.id === id)
  if(!i) return false 
  return _cats.splice( i , 1) 
}





