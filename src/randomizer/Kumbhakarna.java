package randomizer;

public class Kumbhakarna extends godClass{ 
    public Kumbhakarna() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Kumbhakarna test = new Kumbhakarna();
    System.out.println(test.getDamageType());
    }
}
