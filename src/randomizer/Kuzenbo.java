package randomizer;

public class Kuzenbo extends godClass{ 
    public Kuzenbo() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Kuzenbo test = new Kuzenbo();
    System.out.println(test.getDamageType());
    }
}
