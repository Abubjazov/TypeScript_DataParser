export const parseDate = (dateString: string): Date => {
    let date: string[] = dateString.split('/')
    
    return new Date(+date[2], +date[1], +date[0])
} 
