export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("ovanzand")) {
    return (
      "This is Olivia Van Zandt's AndrewID! ");
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Olivia");
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }

  const largestNum = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestNum) {
    const x: number = parseInt(largestNum[1]);
    const y: number = parseInt(largestNum[2]);
    const z: number = parseInt(largestNum[3]);
    return (Math.max(x,y,z)).toString();
  }

  const subtractMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subtractMatch) {
    const x: number = parseInt(subtractMatch[1]);
    const y: number = parseInt(subtractMatch[2]);
    return (x-y).toString();
  }




  return "";

  
}
