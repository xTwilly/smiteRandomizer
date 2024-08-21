package randomizer;

public class Surtr extends godClass{ 
    public Surtr() {
    	 this.role = "Solo";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Surtr test = new Surtr();
    System.out.println(test.getDamageType());
    }
}
